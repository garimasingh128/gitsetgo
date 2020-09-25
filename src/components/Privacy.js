import React from 'react';

const Privacy = () => {
  return (
    <div
      className="container profile-box"
      style={{
        fontSize: 16,
        padding: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 120,
      }}
    >
      <h1>Git Set Go Privacy Statement</h1>
      <p style={{ fontSize: 20, marginTop: 20 }}>Effective Date: September 25, 2020</p>
      <section style={{ marginTop: 30, marginBottom: 16, textAlign: 'left' }}>
        <p style={{ marginBottom: 10 }}>
          At gitsetgo, accessible from gitsetgo.netlify.app , one of our main
          priorities is the privacy of our visitors. This Privacy Policy
          document contains types of information that is collected and recorded
          by gitsetgo and how we use it.
        </p>
        <p style={{ marginBottom: 10 }}>
          If you have additional questions or require more information about our
          Privacy Policy, do not hesitate to contact us.
        </p>
        <p style={{ marginBottom: 10 }}>
          This Privacy Policy applies only to our online activities and is valid
          for visitors to our website with regards to the information that they
          shared and/or collect in gitsetgo. This policy is not applicable to
          any information collected via channels other than this website.
        </p>
      </section>
      <section style={{ marginTop: 10, marginBottom: 16, textAlign: 'left' }}>
        <h3>Consent</h3>
        <p style={{ marginBottom: 10 }}>
          By using our website, you hereby consent to our Privacy Policy and
          agree to its terms.
        </p>
      </section>
      <section style={{ marginTop: 10, marginBottom: 16, textAlign: 'left' }}>
        <h3 style={{ textAlign: 'left' }}>Information we collect</h3>
        <p style={{ marginBottom: 10 }}>
          We only collect personal information from your public GitHub account.
          We donot collect or use any sensitive or private data from your
          profile.
        </p>
      </section>
      <section style={{ marginTop: 10, marginBottom: 16, textAlign: 'left' }}>
        <h3 style={{ textAlign: 'left' }}>How we use your information</h3>
        <p style={{ marginBottom: 10 }}>
          We use the information we collect from GitHub solely for the purpose
          of generating your resume. We donot store, log or use your data for
          analytics purposes. Collected data is not shared with any 3rd party
          websites or advertisement trackers or any promotional activities.
        </p>
      </section>
    </div>
  );
};

export default Privacy;
