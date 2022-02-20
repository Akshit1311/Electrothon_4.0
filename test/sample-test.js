const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DNews", function () {
  it("Should return the blog ipfs url", async function () {
    const DNews = await ethers.getContractFactory("DNews");
    const dNews = await DNews.deploy();
    await dNews.deployed();

    const createBlog1 = await dNews.createBlog("ipfs://1");
    const createBlog2 = await dNews.createBlog("ipfs://2");

    // wait until the transaction is mined
    await createBlog1.wait();
    await createBlog2.wait();

    const blogs = await dNews.getAllBlogs();
    const authBlogCount = await dNews.getAuthorBlogCount();
    console.log({ blogs, authBlogCount });
  });
});
