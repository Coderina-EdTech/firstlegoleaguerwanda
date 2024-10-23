import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center py-10">
          <h1 className="text-4xl font-extrabold text-gray-800">About FLL</h1>
          <p className="mt-4 text-lg text-gray-600">
            Empowering young minds to shape the future through STEM and
            Robotics.
          </p>
        </div>

        {/* Overview Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            What is FLL?
          </h2>
          <p className="text-gray-700 leading-6">
            FIRST LEGO League (FLL) is a global robotics competition that aims
            to inspire young people to be leaders in science, technology,
            engineering, and mathematics (STEM). FLL engages students in
            hands-on robotics challenges that encourage creativity, teamwork,
            and problem-solving, all while building essential skills for the
            future.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-6">
            Our mission is to ignite curiosity and passion for STEM in students
            aged 9 to 16 through robotics and innovative problem-solving. FLL
            provides a platform where young innovators can design, build, and
            program robots to solve real-world challenges while adhering to the
            core values of discovery, teamwork, and inclusion.
          </p>
        </section>

        {/* Core Values Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Core Values</h2>
          <div className="space-y-6">
            <p className="text-gray-700 leading-6">
              FLL operates on a foundation of core values that guide
              participants throughout the competition:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Discovery</strong>: Exploring new skills and ideas.
              </li>
              <li>
                <strong>Innovation</strong>: Using creativity and persistence to
                solve problems.
              </li>
              <li>
                <strong>Impact</strong>: Applying what is learned to improve the
                world.
              </li>
              <li>
                <strong>Inclusion</strong>: We respect each other and embrace
                our differences.
              </li>
              <li>
                <strong>Teamwork</strong>: We are stronger when we work
                together.
              </li>
              <li>
                <strong>Fun</strong>: We enjoy and celebrate what we do!
              </li>
            </ul>
          </div>
        </section>

        {/* How to Get Involved Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Get Involved
          </h2>
          <p className="text-gray-700 leading-6 mb-4">
            Want to be part of the exciting world of robotics and innovation?
            Here’s how you can get involved:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Join a Team</strong>: Students can join or form an FLL
              team at their school, community center, or with friends.
            </li>
            <li>
              <strong>Volunteer</strong>: Become a mentor, coach, or volunteer
              to help guide students on their STEM journey.
            </li>
            <li>
              <strong>Attend Competitions</strong>: Participate or spectate at
              regional, national, and global FLL competitions.
            </li>
          </ul>
        </section>

        {/* Footer Section */}
        <div className="mt-16 text-center text-gray-600">
          <p>
            Learn more about FLL at{" "}
            <a
              href="https://www.firstlegoleague.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 underline"
            >
              firstlegoleague.org
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
