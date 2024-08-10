import React from 'react'
import { Button, Container } from 'react-bootstrap'
import Navbar from './Navbar'
import { InlineWidget } from "react-calendly";

import { BsArrowLeftCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
const Schedule = () => {
    // const [loading,setLoading] = useState(false);

    // useEffect(() => {
    //     setLoading(true)
    //     setTimeout(() => {
    //         setLoading(false)
    //     },1000)
    // },[])

  return (
    <Container>
      <Navbar />
      <div>
        <InlineWidget url="https://calendly.com/sivaramya-kairatechnologies/30min" />

        <Button variant="danger">
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            {" "}
            <BsArrowLeftCircleFill /> Back
          </Link>
        </Button>
      </div>
      {/* {loading ? (
        <ClipLoader
          color={"#003163"}
          loading={loading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <>
          <Navbar />
          <div>
            <InlineWidget url="https://calendly.com/sannasi-kairatechnologies/30min" />

            <Button variant="danger">
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                {" "}
                <BsArrowLeftCircleFill /> Back
              </Link>
            </Button>
          </div>
        </>
      )} */}
    </Container>
  );
}

export default Schedule