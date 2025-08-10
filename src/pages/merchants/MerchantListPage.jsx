import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { getMerchants } from "../../services/merchantService";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import { BsArrowCounterclockwise, BsFilter, BsSearch } from "react-icons/bs";
import { usePageContext } from "../../contexts/PageContext";

const MerchantListPage = () => {
  const [merchants, setMerchants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setPage } = usePageContext();

  const initialValues = {
    search: "",
  };

  const validationSchema = Yup.object().shape({
    search: Yup.string().max(255, "Too Long!"),
  });

  const fetchMerchants = async (filters = {}) => {
    setLoading(true);
    setError(null);
    try {
      // const data = await getMerchants(filters);
      const data = [
        {
          namaUsaha: "TEST KENDALA",
          kondisiMerchant: "Buka",
          kota: "BALI",
          area: "CANGGU",
          lokasi: "JALAN BABAKAN CANGGU",
          mid: "230874932",
          tipeMerchant: "BCA",
          namaSurveyor: "AZFI 123",
        },
        {
          namaUsaha: "TOKO MAJU JAYA",
          kondisiMerchant: "Tutup",
          kota: "JAKARTA",
          area: "KEBAYORAN BARU",
          lokasi: "JL. SENOPATI NO. 10",
          mid: "987654321",
          tipeMerchant: "MANDIRI",
          namaSurveyor: "BUDI SANTOSO",
        },
        {
          namaUsaha: "WARUNG KECIL",
          kondisiMerchant: "Buka",
          kota: "SURABAYA",
          area: "GUBENG",
          lokasi: "JL. PEMUDA NO. 5",
          mid: "112233445",
          tipeMerchant: "BRI",
          namaSurveyor: "CITRA DEWI",
        },
      ];
      setMerchants(data);
    } catch (err) {
      setError("Failed to fetch merchants. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMerchants();
    setPage({
      title: "Merchant",
      subtitle: "Halaman untuk manajemen data merchant",
    });
  }, [setPage]);

  const handleSearch = (values) => {
    console.log("Search Filters:", values);
    fetchMerchants(values);
  };

  const handleReset = (resetForm) => {
    console.log("Resetting form");
    resetForm();
    fetchMerchants();
  };

  return (
    <Container fluid>
      <Card className="mb-4 custom-card">
        <CardBody>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSearch}
          >
            {({ handleSubmit, handleReset: formikReset, values }) => (
              <Form onSubmit={handleSubmit}>
                <Row className="align-items-end">
                  <Col md={6}>
                    <Field
                      name="search"
                      id="search"
                      as={Input}
                      placeholder="Search..."
                    />
                  </Col>
                  <Col md={6} className="d-flex justify-content-end">
                    <Button
                      type="button"
                      color="danger"
                      className="me-2"
                      onClick={() => handleReset(formikReset)}
                    >
                      <BsArrowCounterclockwise className="me-2" />
                      Reset
                    </Button>
                    <Button type="submit" color="primary" className="me-2">
                      <BsSearch className="me-2" />
                      Search
                    </Button>
                    <Button type="button" color="warning">
                      <BsFilter className="me-2" />
                      Filter
                    </Button>
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </CardBody>
      </Card>

      <Row>
        <Col>
          <Card className="custom-card">
            <CardBody>
              {/* <CardTitle tag="h5" className="mb-4">
                MERCHANT LIST
              </CardTitle> */}
              {loading ? (
                <LoadingSpinner />
              ) : error ? (
                <p className="text-danger">{error}</p>
              ) : (
                <div className="table-responsive">
                  <table className="table table-striped table-hover">
                    <thead>
                      <tr>
                        <th>Nama Usaha</th>
                        <th>Kondisi Merchant</th>
                        <th>Kota</th>
                        <th>Area</th>
                        <th>Lokasi</th>
                        <th>MID</th>
                        <th>Tipe Merchant</th>
                        <th>Nama Surveyor</th>
                      </tr>
                    </thead>
                    <tbody>
                      {merchants.length > 0 ? (
                        merchants.map((merchant, index) => (
                          <tr key={index}>
                            <td>
                              {merchant.namaUsaha}{" "}
                              {merchant.namaUsaha === "TEST KENDALA" && (
                                <span className="badge bg-success ms-2">
                                  Top Contributor
                                </span>
                              )}
                            </td>
                            <td>{merchant.kondisiMerchant}</td>
                            <td>{merchant.kota}</td>
                            <td>{merchant.area}</td>
                            <td>{merchant.lokasi}</td>
                            <td>{merchant.mid}</td>
                            <td>{merchant.tipeMerchant}</td>
                            <td>{merchant.namaSurveyor}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="8" className="text-center">
                            No merchants found.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MerchantListPage;
