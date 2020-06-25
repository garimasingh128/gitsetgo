import React from "react";

function Footer() {
    let color_scheme = window.localStorage.getItem("theme") === "light" ? "no-preference: light; light: ligth; dark: light;" : "no-preference: dark; dark: dark; light: dark;";
    return (
        <footer className="mt-5">
            <div>
                <h5 className="logo w-100 d-block text-center" href="#">
                    Made With <i className="fa fa-heart text-danger"></i> by &nbsp;
                    <a href="https://garimasingh.me" target="_blank" rel="noopener noreferrer">
                        @garimasingh
                    </a>
                    &nbsp; and &nbsp;
                    <a href="http://github.com/mrinal41298" target="_blank" rel="noopener noreferrer">
                        @mrinalsharma
                    </a>
                </h5>
                <div className="git-footer">
                    <a className="github-button" data-color-scheme={color_scheme} href="https://github.com/garimasingh128" data-show-count="true" aria-label="Follow @garimasingh128 on GitHub">
                        Follow @garimasingh128
                    </a>
                    <a className="github-button" data-color-scheme={color_scheme} href="https://github.com/mrinal41298" data-show-count="true" aria-label="Follow @mrinal41298 on GitHub">
                        Follow @mrinal41298
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

// data-color-scheme="no-preference: dark; light: dark; dark: dark;"
// data-color-scheme="no-preference: dark; light: dark; dark: dark;"
