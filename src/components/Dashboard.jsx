import { useEffect, useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { ThemeContext, SomeContext } from '../context/context'
import { Route, Routes, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from '../pages/Home';
import Payment from '../pages/Payment';
import Students from '../pages/Students';
import { studentsData } from "../data/students"

export default function Dashboard() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [studentData, setStudentData] = useState(studentsData)
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
  }, [studentData, setStudentData])

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: "start", backgroundColor: "#F8F8F8", height: "100vh", width: "100%" }}>
        <SomeContext.Provider value={{ openSidebar, setOpenSidebar, studentData, setStudentData, filteredData, setFilteredData }}>
          <Sidebar />
          <Header />
          <Box sx={{ width: openSidebar ? "100%" : "80%", margin: "72px 30px 30px 30px" }}>
            <Routes>
              <Route path='/home' element={<Home />} />
              <Route path='/course' element={<h1>Course</h1>} />
              <Route path='/students' element={<Students studentData={studentData} filteredData={filteredData} />} />
              <Route path='/payments' element={<Payment />} />
              <Route path='/report' element={<h1>Report</h1>} />
              <Route path='/settings' element={<h1>Settings</h1>} />
            </Routes >
          </Box>
        </SomeContext.Provider>
      </Box>
    </>
  )
}
