import { useEffect } from "react";
import { Row, Col, Card, Table } from "react-bootstrap";
import useFetech from "../components/useFetch";

const Home = () => {
  const endpoint = process.env.REACT_APP_API_ENDPOINT;
  useEffect(() => {
    document.title = "Welcome to Live Cryptocurrency Price";
  });

  const { preloader, data, isError, error, isFetching, refetch } = useFetech({
    key: ["pairs", "allprice"],
    url: endpoint,
  });

  console.log(data);
  return (
    <>
      <div className="container">
        <Row className="mt-3">
          <Col md={12} className="fs-3 fw-bold">
            <span className="text-brand-deep">Welcome To</span>
            <br />
            <span className="text-brand">Live Cryptocurrency Price</span>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={12}>
            <Card>
              <h4 className="mt-2">Pair Prices</h4>
              <Table></Table>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;
