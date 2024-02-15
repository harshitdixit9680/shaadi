import React from "react";

const Member = () => {
  return (
    <>
      <section className="matrimonial_site">
        <div
          data-testid="footer_shaadi_logo"
          class="Footer_sRedLogo__1us9y"
          title="Matrimony Site by Shaadi.com"
        ></div>
        <p className="heading_sadilive">
          Shaadi.com - Trusted by over 35 Million Members
        </p>
        <div class="Footer_contentCopy__1NnPJ">
          <span data-testid="footer_content_text">
            Shaadi.com, one of India's best known brands and the world's largest
            matrimonial service was founded with a simple objective - to help
            people find happiness. The company pioneered online matrimonials in
            1996 and continues to lead the exciting matrimony category after
            more than a decade. By redefining the way Indian brides and grooms
            meet for marriage, Shaadi.com has created a world-renowned service
            that has touched over 35 million people.
          </span>{" "}
          <a
            data-testid="footer_text_more_link"
            href="https://www.shaadi.com/introduction/index/letter-from-cmd"
          >
            Learn more<span class="common_rightArrow__2KZat"></span>
          </a>
        </div>
        <div class="col-xs-12" data-testid="footer_links_block">
          <ul class="Footer_contentNavigation__39grr">
            <li>
              <a
                href="https://www.shaadi.com/matrimony/india-matrimony"
                title="Matrimony Profiles for India"
              >
                India
              </a>
            </li>
            <li>
              <a
                href="https://www.shaadi.com/matrimony/usa-nri-matrimony"
                title="Matrimony Profiles for USA"
              >
                USA
              </a>
            </li>
            <li>
              <a
                href="https://www.shaadi.com/matrimony/canada-nri-matrimony"
                title="Matrimony Profiles for Canada"
              >
                Canada
              </a>
            </li>
            <li>
              <a
                href="https://www.shaadi.com/matrimony/united-kingdom-nri-matrimony"
                title="Matrimony Profiles for UK"
              >
                UK
              </a>
            </li>
            <li>
              <a
                href="https://www.shaadi.com/matrimony/singapore-nri-matrimony"
                title="Matrimony Profiles for Singapore"
              >
                Singapore
              </a>
            </li>
            <li>
              <a
                href="https://www.shaadi.com/matrimony/australia-nri-matrimony"
                title="Matrimony Profiles for Australia"
              >
                Australia
              </a>
            </li>
            <li>
              <a
                href="https://www.shaadi.com/matrimony/united-arab-emirates-nri-matrimony"
                title="Matrimony Profiles for UAE"
              >
                UAE
              </a>
            </li>
            <li>
              <a
                href="https://www.shaadi.com/matrimonials/countries"
                rel="noopener noreferrer"
                target="_blank"
                title="NRI Matrimony Profiles"
              >
                NRI Matrimonials<span class="common_rightArrow__2KZat"></span>
              </a>
            </li>
          </ul>
        </div>




                {/*Trusted by Millions */}
        <div class="container" data-testid="trusted_by_block">
          <div class="col-sm-8 col-sm-offset-2 FooterTrustedBy_trustedByBlockWrap__2gLsC">
            <div
              data-testid="trusted_by_heading"
              class="FooterTrustedBy_trustedByButton__1c6sF"
            >
              Trusted by Millions
            </div>
            <div class="row">
              <div
                class="col-sm-4 FooterTrustedBy_trustedByInnerWrap__1UauE"
                data-testid="best_match_block"
              >
                <div class="FooterTrustedBy_trustedBlockwrap__3F9jt">
                  <span class="FooterTrustedBy_best_matches__24__V"></span>
                  <span class="trustedText">Best Matches</span>
                </div>
              </div>
              <div
                class="col-sm-4 FooterTrustedBy_trustedByInnerWrap__1UauE"
                data-testid="max_respones_block"
              >
                <div class="FooterTrustedBy_trustedBlockwrap__3F9jt">
                  <span class="FooterTrustedBy_max_respones__9Htr9"></span>
                  <span class="trustedText">Verified Profiles</span>
                </div>
              </div>
              <div
                class="col-sm-4 FooterTrustedBy_trustedByInnerWrap__1UauE"
                data-testid="privacy_block"
              >
                <div class="FooterTrustedBy_trustedBlockwrap__3F9jt">
                  <span class="FooterTrustedBy_privacy__3mKRj"></span>
                  <span class="trustedText">100% Privacy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Member;
