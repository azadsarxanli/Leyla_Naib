import './BreadCrumb.scss';
import { Link, useLocation, useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';

const BreadCrumb = ({ crumbItem }) => {
    let matchMedia = window.matchMedia("(max-width: 991px)").matches;

    const [breadCrumbItems, setBreadCrumbItems] = useState([]);

    // let history = useHistory();
    // let location = useLocation();

    // useEffect(() => {
    //     setBreadCrumbItems("");
    //     let crumb = crumbItem.split("/");
    //     crumb.map(itemCrumb => {
    //         if (itemCrumb !== '') {
    //             setBreadCrumbItems(itemCrumb);
    //         }
    //     })
    // })

    // function usePaseName() {
    //     let location = useLocation();
    //     let pathnames = location.pathname.split("/");
    //     useEffect(() => {
    //         pathnames.map(path => {
    //             console.log(path)
                // if (path !== '') {
                //     setBreadCrumbItems(path);
                // }
    //         })
    //     }, [location]);
    // };

    return !matchMedia ? (
        <section className="bread-crumb">
        <Link to="/">home &sdot;</Link>
        <Link to="/blog">blog &sdot;</Link>
        </section>
    ) : (
        <></>
    );
}

export default BreadCrumb;