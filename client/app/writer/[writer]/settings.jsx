import { useEffect, useRef, useState } from "react";
import SettingsSidebar from "../../../components/SettingsSidebar/settingsSidebar";

const Settings = () => {
  const sectionRefs = {
    Basics: useRef(null),
    Payments: useRef(null),
    Branding: useRef(null),
    Emails: useRef(null),
    Community: useRef(null),
    Chat: useRef(null),
    Team: useRef(null),
    Privacy: useRef(null),
    Details: useRef(null),
    Notifications: useRef(null),
    Analytics: useRef(null),
    "Danger zone": useRef(null),
  };

  const [activeSection, setActiveSection] = useState("Basics");

  const handleScroll = (section) => {
    sectionRefs[section].current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = Object.keys(sectionRefs).find(
              (key) => sectionRefs[key].current === entry.target
            );
            if (section) {
              setActiveSection(section);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe each section
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Cleanup the observer on unmount
    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-50" />

      <div className="lg:flex justify-center gap-[30px] items-start min-h-screen bg-gray-50">
        {/* Sidebar */}
        <SettingsSidebar
          handleScroll={handleScroll}
          activeSection={activeSection}
        />

        {/* Content */}
        <div className="lg:w-[50%] w-[100%]">
          {Object.keys(sectionRefs).map((section) => (
            <div
              key={section}
              ref={sectionRefs[section]}
              className="bg-white h-auto shadow-md rounded-lg py-6 mb-8"
            >
              <h2 className="text-xl font-bold mb-4 border-b pb-2 px-[24px]">
                {section}
              </h2>
              <div className="px-[24px]">
                {section === "Basics" && (
                  <p>
                    Manage the basic settings of your account such as username,
                    email, and password. Make sure to keep your information up
                    to date.
                  </p>
                )}
                {section === "Payments" && (
                  <p>
                    Update your payment methods, view transaction history, and
                    manage your subscriptions or invoices. Ensure your billing
                    information is correct to avoid payment issues.
                  </p>
                )}
                {section === "Branding" && (
                  <p>
                    Customize the branding of your profile or business. Update
                    logos, themes, and colors that reflect your brand identity.
                  </p>
                )}
                {section === "Emails" && (
                  <p>
                    Manage your email preferences. You can control which
                    notifications you receive, set up auto-replies, and manage
                    forwarding addresses.
                  </p>
                )}
                {section === "Community" && (
                  <p>
                    Configure community settings such as forum participation,
                    community guidelines, and social sharing options. Foster
                    engagement and ensure compliance with community standards.
                  </p>
                )}
                {section === "Chat" && (
                  <p>
                    Manage chat settings, including notifications, availability
                    status, and chat history. Enable or disable live chat
                    features as needed.
                  </p>
                )}
                {section === "Team" && (
                  <p>
                    Invite team members, manage roles and permissions, and
                    control access to different parts of your application or
                    platform. Make sure each member has the appropriate
                    permissions.
                  </p>
                )}
                {section === "Privacy" && (
                  <p>
                    Configure privacy settings for your account. Control who can
                    view your information, manage data-sharing preferences, and
                    set your visibility status.
                  </p>
                )}
                {section === "Details" && (
                  <p>
                    Update your profile details such as your bio, profile
                    picture, and other relevant personal or business
                    information. Keep this section accurate for better
                    networking.
                  </p>
                )}
                {section === "Notifications" && (
                  <p>
                    Adjust your notification preferences. Select which alerts
                    you`d like to receive for things like new messages, updates,
                    and system alerts.
                  </p>
                )}
                {section === "Analytics" && (
                  <p>
                    View analytics related to your account or platform. Track
                    user engagement, performance metrics, and growth statistics
                    to optimize your efforts.
                  </p>
                )}
                {section === "Danger zone" && (
                  <p>
                    This is the place for critical actions like deactivating
                    your account or deleting important data. Proceed with
                    caution, as changes here could have irreversible effects.
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Settings;
