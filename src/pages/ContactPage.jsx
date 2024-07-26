import PageHeader from "../ui/PageHeader";

function ContactPage() {
  return (
    <>
      <PageHeader page="Contact" />
      <p>Admissions Page</p>
      <div>
        <h1>Contact Page</h1>

        <p>
          Address:{" "}
          <span>
            Springdale Public School, 123 Education Lane, Cityville, State, ZIP
            Code
          </span>
        </p>

        <p>
          <span>Phone: "+1 (123) 456-7890"</span>
          <span>Email: "info@springdale.edu"</span>
        </p>

        <div>
          <h6>Contact form:</h6>
          <ul>
            <li>Name</li>
            <li>Email</li>
            <li>Message</li>
          </ul>
        </div>

        <p>
          Google Maps Integration: Embed the location using Google Maps iframe.
        </p>
      </div>
    </>
  );
}

export default ContactPage;
