/* eslint-disable react/no-unescaped-entities */
const Careers = () => {
  return (
    <div className="careers-main-wrapper">
      <div className="content-header text-center my-3 mt-5">Careers</div>
      <div className="my-3">
        Welcoming the Tech spirit of individuality within a community of
        togetherness, we don’t hire employees that fit our culture — we hire
        people that can add to our culture in new and exciting ways. At Present
        We are Looking For Dedicated Employees meeting Below Criteria
      </div>
      <div className="my-3">
        <p>
          <span className="d-flex fw-semibold mont"> ✔ Education:</span> Should
          have studied any UG Degree Curriculum Relatable to Computer Science
          and it's Technologies
        </p>
        <p>
          <span className="d-flex fw-semibold mont"> ✔ Experience:</span> We are
          Even Recruiting People With Zero Year working Experience, but with
          some Experience in Independent Project of Any Tech Stack
        </p>
        <p>
          <span className="d-flex fw-semibold mont"> ✔ Tech Stack:</span> React,
          Redux ,React Native,Webpack ,Express,Angular, Vue JS
        </p>
        <p>
          <span className="d-flex fw-semibold mont "> ✔ Other Skills:</span>{" "}
          Good hands-on at Web UI technologies ,Knowledge of Git or any other
          Version Control System,Any Testing Tools. Overall good analytical and
          problem-solving skills.
        </p>
      </div>
      <div className="my-5">
        Interested People can mail to
        <a href="mailto:example@example.com">
          <span className="mail-careers"> hr@yottawebservices.in</span>
        </a>
      </div>
    </div>
  );
};

export default Careers;
