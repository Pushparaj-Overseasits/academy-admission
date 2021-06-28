import React, { useState } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import Course from "views/admin/Course.js";
export default function Admin() {
  const history = useHistory();
  const [auth, setAuth] = useState(false);
  const authenticate = async (req, res) => {
    try {
      const response = await fetch('http://localhost:8000/admin/user-master/auth', {
        method: 'GET',
        headers: { "Content-Type": "application/json" },
        credentials: "include"
      });
      const result = await response.json();
      console.log(result);
      setAuth(true);
    } catch (err) {
      console.log(err);
      history.push('/auth');
    }
  }
  authenticate();
  if (!auth) return (<div></div>);
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/course" exact component={Course} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
