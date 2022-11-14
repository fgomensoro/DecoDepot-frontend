import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import AdminNav from "../../components/admin/adminNav/AdminNav";

function Admin() {
  return (
    <>
      <Navbar />
      <AdminNav />
      <Footer />
    </>
  );
}

export default Admin;
