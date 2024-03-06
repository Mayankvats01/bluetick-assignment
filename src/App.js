import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Services2 from "./components/Services 2/Services";
import "./App.css";
import Contact from "./components/Contact/Contact";
import SimpleReactFooter from "simple-react-footer";
function App() {
  const description = "Bluetick Consultants supports hiring remote developers, building technology products, and enabling end-to-end digital transformation. We are a  technology-driven firm and have already created a substantial impact in the Indian start-up ecosystem. With years of previous experience in technology companies who are the best in business - Amazon, Microsoft, Craftsvilla, etc., we understand your needs and thus provide customized solutions.";
  const title = "BlueTick Consultants";
  const columns = [
    {
        title: "Resources",
        resources: [
            {
                name: "Blogs",
                link: "/blogs"
            }
        ]
    },
    {
        title: "Products",
        resources: [
            {
                name: "Talk to Code",
                link: "/talk-to-code"
            },
            {
                name: "Privacy Doc",
                link: "/privacy-doc"
            },
            {
                name: "InterviewGPT",
                link: "/interviewGPT"
            },
            {
                name: "Sales Call Evaluator",
                link: "/sales-call-evaluator"
            }
        ]
    },
    
 ];
  return (
    <div
      className="App"
    >
      <Navbar />
      <Intro />
      <Services />
      <Services2 />
      <Contact />
      <SimpleReactFooter 
      description={description} 
      title={title}
      columns={columns}
      linkedin="blue_tick_consultants_llp"
      facebook="blue_tick_consultants_llp"
      twitter="bluetickconsultants"
      instagram="bluetickconsultants"
      youtube="UCFt6TSF464J8K82xeA?"
      pinterest="bluetickconsultants"
      copyright="All rights reserved by Bluetick Consultants LLP"
      iconColor="black"
      backgroundColor="orange"
      fontColor="black"
      copyrightColor="black"
 />
    </div>
  );
}

export default App;
