import React from "react";
import "./About.scss";

function About() {
  return (
    <div className='about-container'>
      {/* page title */}

      <h1 className='about-title'>ABOUT</h1>
      <span className='about-line'></span>
      <p className='about-content'>
        Himenaeos nec venenatis ante arcu cubilia nostra convallis conubia
        commodo montes. Ad fames bibendum vel dolor molestie in sit, suscipit
        erat sapien interdum? Natoque per parturient viverra. Orci varius
        viverra mollis non. Ac mi quam dis aliquet erat curabitur scelerisque
        imperdiet volutpat sem. Class tellus vitae porttitor non ipsum rhoncus
        consectetur mauris iaculis augue parturient. Placerat pharetra aliquam
        ornare mauris ut justo. Vulputate, sagittis mauris nulla ridiculus
        pellentesque neque quis nibh himenaeos. Cursus. Sociosqu penatibus
        cubilia orci lacinia rhoncus vel iaculis vivamus odio tristique
        consectetur metus. Cubilia nisl imperdiet gravida aptent sodales urna.
        Himenaeos fames dignissim, commodo per imperdiet metus in duis tempus.
      </p>
      {/* resumes / need to be updated. */}
      {/* resume download link */}
      <a
        className='resume-link'
        href='resume/ScrollResume.pdf'
        download='Carl_Redding_Resume.pdf'
      >
        PDF Resume
      </a>
    </div>
  );
}

export default About;
