import { async } from "@firebase/util";
import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { TwitterShareButton, TwitterIcon, FacebookShareButton,FacebookIcon, RedditShareButton, RedditIcon } from "react-share";
import Collapsible from "react-collapsible-paragraph";

const posts = [
  {
    id:"x1",
    imgUrl: "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png",
    creator: "0xkasdkd",
    title: "Test Title 1",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id:"x2",
    imgUrl: "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png",
    creator: "0xkasdkd",
    title: "Test Title 2",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id:"x3",
    imgUrl: "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png",
    creator: "0xkasdkd",
    title: "Test Title 3",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export const getStaticProps = async() =>{
  return {
    props: {
      news: posts,
    }
  }
}

export default function Home({ news }) {
  //console.log(news)
    return (
    <div className="center">
      <Head>
        <title>TOINApp</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      </Head>
       <h1> TION : HOME PAGE</h1>
       <div className="card-panel center">
      <h5 className="black-text text-darken-5 font-style"><i> Your feed</i></h5>
      </div>

      {news.map(newslist=>{
        return (
          <div className="card" key={newslist.id}>
        <div className="card-image">
          <img src={newslist.imgUrl}/>
          <span className="black-text card-title">{newslist.title}</span>
        </div>
        <div className="card-content">
        <div>
      <Collapsible lines={3}>
       {newslist.body}
      </Collapsible>
    </div>
        </div>
        <div className="row">
        <div className="col s6">
        <div className="card-action">
        <a className="waves-effect waves-light btn-small aa"><i className="small material-icons">arrow_upward</i></a>
        <a className="waves-effect waves-light btn-small"><i className="small material-icons">arrow_downward</i></a>
          </div>
        </div>
        <div className="col s6">
         <div className="card-action">
           
          <TwitterShareButton url="www.github.com/Dhruv-194" title={newslist.title}>
          <TwitterIcon size={32} round />
          </TwitterShareButton>
          <FacebookShareButton url="www.github.com/Dhruv-194" quote={newslist.title}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <RedditShareButton url="www.github.com/Dhruv-194" title={newslist.title}
            windowWidth={660}
            windowHeight={460}  >
            <RedditIcon size={32} round />
          </RedditShareButton>
         
        </div> </div></div>
      </div>
        )
      })}
      <style jsx>
        {`
          .card{
            max-width:600px;
            margin:22px auto;          
          }
          .aa{
            margin:20px;
          }
        `}
      </style>
    
    </div>
  );
}
