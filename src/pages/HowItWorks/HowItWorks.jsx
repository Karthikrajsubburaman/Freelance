import React, { useEffect, useRef } from 'react';
import './HowItWorks.css';
import step1Icon from '../../assets/step1_icon.png';
import step2Icon from '../../assets/step2_icon.png';
import step3Icon from '../../assets/step3_icon.png';
import step4Icon from '../../assets/step4_icon.png';
import step5Icon from '../../assets/step5_icon.png';
import step6Icon from '../../assets/step6_icon.png';

const HowItWorks = () => {
  const stepsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    stepsRef.current.forEach((step) => observer.observe(step));

    return () => observer.disconnect();
  }, []);

  const steps = [
    { 
      title: "Sign Up", 
      description: "Create an account by providing your basic details. Once registered, you'll be able to access all the features of our platform.", 
      icon: step1Icon 
    },
    { 
      title: "Set Up Your Profile", 
      description: "Complete your profile by adding your skills, preferences, and portfolio. This helps us tailor the experience to your needs.", 
      icon: step2Icon 
    },
    { 
      title: "Browse Opportunities", 
      description: "Explore various projects and job opportunities that match your skills and interests. Apply or bid on the ones you find interesting.", 
      icon: step3Icon 
    },
    { 
      title: "Get Matched with Clients", 
      description: "Our platform will connect you with clients based on your profile and the projects you've shown interest in. You'll receive notifications and updates about your matches.", 
      icon: step4Icon 
    },
    { 
      title: "Start Working and Earn", 
      description: "Once you get matched, start working on the project. Deliver quality work and earn rewards or payments based on the project terms.", 
      icon: step5Icon 
    },
    { 
      title: "Provide Feedback", 
      description: "After completing a project, provide feedback to improve our platform and share your experience with others.", 
      icon: step6Icon 
    }
  ];

  return (
    <div className="how-it-works">
      <h1>How It Works</h1>
      <div className="steps">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="step" 
            ref={(el) => (stepsRef.current[index] = el)}
          >
            <div className="step-icon">
              <img src={step.icon} alt={`Step ${index + 1} Icon`} />
            </div>
            <div className="step-content">
              <h2>Step {index + 1}: {step.title}</h2>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
