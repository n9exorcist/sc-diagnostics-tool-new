// MainContent.jsx
import React from "react";

const MainContent = () => {
  return (
    <main className="content-container">
      <h1>Hi Narayanan! How can I help you today?</h1>
      <p>
        Elevate your delivery experience with the Method One Virtual Assistant.
        To get started, please select one of the below standard approaches.
      </p>
      <p>This will tailor the responses to your requirements.</p>

      <div className="standard-approaches">
        <button>Application Managed Services</button>
        <button>Application Migration & Modernization</button>
        <button>Data Platform Migration Rehosting</button>
        <button>Data Platform Migration Refactoring</button>
        <button>eCommerce Implementation</button>
        <button>Infrastructure Managed Services</button>
        <button>Salesforce Value Transformation</button>
        <button>SAP Greenfield</button>
        <button>Transformation Strategy & Integration</button>
        <button>Unified Approach for Managed Services</button>
      </div>

      <hr />

      <p>
        You could leverage Method One Virtual Assistant to provide responses to
        your questions on the Method One Common Library without selecting a
        standard approach.
      </p>
    </main>
  );
};

export default MainContent;
