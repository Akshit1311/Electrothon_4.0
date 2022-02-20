// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "hardhat/console.sol";

contract DNews is ERC20, ERC20Burnable, Ownable {
    string[] ipfsDataUrls;

    mapping(string => address) private ipfsDataUrlToAuthor;
    mapping(address => int256) private authorBlogCount;
    mapping(string => int256) private votes;

    int256 private count = 0;

    constructor() ERC20("DNews", "DN") {
        _mint(msg.sender, 10000000 * 10**decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function createBlog(string memory _ipfsDataUrl) public payable {
        ipfsDataUrls.push(_ipfsDataUrl);
        ipfsDataUrlToAuthor[_ipfsDataUrl] = msg.sender;
        authorBlogCount[msg.sender]++;
        votes[_ipfsDataUrl] = 0;
    }

    function getAuthorBlogCountByAddr(address author)
        public
        view
        returns (int256)
    {
        return authorBlogCount[author];
    }

    function getAuthorBlogCount() public view returns (int256) {
        return authorBlogCount[msg.sender];
    }

    function getAllBlogs() public view returns (string[] memory) {
        return ipfsDataUrls;
    }

    function getBlogVotes(string memory _ipfsDataUrl)
        public
        view
        returns (int256)
    {
        return votes[_ipfsDataUrl];
    }

    function voteForBlog(string memory _ipfsDataUrl) public {
        votes[_ipfsDataUrl]++;
    }
}
