import "./BlogInterior.scss";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import blogInteriorImage from "../../../assets/images/blog-interior.png";
import quoteImage from "../../../assets/images/quote.png";
import selectiveImage from "../../../assets/images/selective-image.png";
import BreadCrumb from "../../BreadCrumb";

const BlogInterior = () => {
  let {id} = useParams();
  const [blog, setBlog] = useState({});

  const fetchBlogData = async () => {
    if (id) {
      try {
        const rawData = await fetch(`http://localhost:3001/api/blog/${id}`);
        const data = await rawData.json();
        await new Promise(x => setTimeout(x, 10));
        setBlog(data.result);
      } catch (error) {
        console.log("ERROR OCCURRED");
      }
    }
  }

  console.log(blog);

  useEffect(() => {
    fetchBlogData();
  },[id])

  useEffect(() => {

    const body = document.body;
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    if (!body.className) {
      header.className = "header";
      body.classList.add("background-color-pink");
      header.classList.add("background-color-pink");
      header.classList.add("header-white");
      footer.classList.add("footer-white");
    }
    return () => {
      body.className = "";
      header.className = "header";
      footer.classList.remove("footer-white");
    };
  });

  return (
    <>
      <BreadCrumb />
      <section className="blog-interior">
        <div className="blog-interior__blog-details-container">
          <h1 className="blog-interior__blog-details-container__title">
            {blog.content?.headerTitle}
          </h1>
          <div className="blog-interior__blog-details-container__image-and-image-detail">
            <p>
              {blog.content?.firstParagraphAfterHeader}
            </p>
            <div className="img-cont">
              {" "}
              <img src={blog.content?.headerImage[0]} alt="blog_image" />
            </div>
          </div>
          <div className="blog-interior__blog-details-container__author-article">
            <p className="paragraph part-n">
              {/* Sit fermentum ullamcorper in fermentum vitae quisque. Eu ultricies
              quis bibendum cras turpis eget ullamcorper vel. Ipsum urna neque,
              magna neque, netus pellentesque quam. Pretium, id arcu ipsum leo
              in gravida nisl egestas. Ut quis donec venenatis urna, id non.
              Pharetra nunc, ut eget et neque eu. Nibh vel sagittis, id
              elementum consectetur. Suspendisse turpis adipiscing imperdiet
              dignissim ut quisque proin imperdiet. Vulputate praesent commodo
              est turpis. Lectus nunc semper gravida velit convallis tempor ac
              et. */}
              {blog.content?.secondParagraphAfterHeader}
            </p>
            <p className="paragraph part-n">
              {/* Sit fermentum ullamcorper in fermentum vitae quisque. Eu ultricies
              quis bibendum cras turpis eget ullamcorper vel. Ipsum urna neque,
              magna neque, netus pellentesque quam. Pretium, id arcu ipsum leo
              in gravida nisl egestas. Ut quis donec venenatis urna, id non.
              Pharetra nunc, ut eget et neque eu. Nibh vel sagittis, id
              elementum consectetur. Suspendisse turpis adipiscing imperdiet
              dignissim ut quisque proin imperdiet. Vulputate praesent commodo
              est turpis. Lectus nunc semper gravida velit convallis tempor ac
              et. */}
              {blog.content?.secondParagraphAfterHeader}
            </p>
          </div>
          <div className="blog-interior__blog-details-container__article-quote-image">
            <div className="blog-interior__blog-details-container__article-quote-image__container">
              <img src={quoteImage} alt="quoteimg" />
              <p>
                {/* Lorem ultrices consectetur neque sed vehicula. Mauris ornare
                suspendisse felis convallis arcu. Maecenas bibendum in commodo,
                sit. Amet, hac sed tincidunt tempus nulla. Neque mi, auctor
                donec amet, libero eget accumsan elit sem. A nunc ut integer in
                sit vel velit elementum. */}
                {blog.content?.centerParagraph}
              </p>
            </div>
            <p className="paragraph part-last part-n">
              {/* Laoreet donec nisl elit facilisis tortor, faucibus. Hendrerit
              eleifend quam amet, sed. Posuere suspendisse maecenas est nulla
              quis. In aenean orci mollis sapien, netus fringilla diam proin at.
              Ornare pellentesque metus, sed ac netus. Amet, consequat sed nunc
              tellus magna. Sociis facilisis nisl, ultrices sagittis. Varius
              interdum nunc et ut ipsum nunc. Faucibus est in viverra tristique
              placerat. Vel auctor lacus, diam, semper sed diam urna faucibus
              vulputate. Diam pretium nisl dolor varius elementum gravida. Amet
              magnis nec mauris dignissim at nunc, imperdiet aenean. Nascetur
              feugiat pulvinar ornare quis. Scelerisque euismod urna dolor sit
              sed. Suspendisse fames neque semper massa justo, faucibus
              convallis eget vitae. Sem scelerisque consequat, purus nulla
              neque, pellentesque. Nec, odio sem ultrices consequat lobortis ac
              non. Tincidunt amet feugiat nunc quam. Ultrices arcu nullam et est
              diam fermentum aliquet quisque luctus. */}
              {blog.content?.paragraphBeforeFooterImage}
            </p>
            <div className="blog-interior__blog-details-container__article-quote-image__selective-image">
              <img src={blog.content?.footerImage[0]} alt="selective__image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogInterior;
