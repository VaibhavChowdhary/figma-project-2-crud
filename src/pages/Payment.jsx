import { Box, Divider, FormControl, MenuItem, Select } from '@mui/material';
import CustomTypo from '../CustomComponents/CustomTypo';
import filter from "../assets/filter.png";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import React, { useContext, useEffect, useState } from 'react';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import eye from "../assets/eye.png"
import { SomeContext } from '../context/context'
import CustomPagination from '../CustomComponents/CustomPagination';
import { paymentsData } from '../data/payments';
import { showSortButton, hideSortButton, sortByName, sortByDate } from "../utils/helpers"


export default function Payment({ paymentData }) {
    const context = useContext(SomeContext);
    const [currPageNo, setCurrPageNo] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [emptyData, setEmptyData] = useState(false)
    let totalPages;
    if (context.filteredData.length > 0) {
        totalPages = Math.ceil(context.filteredData.length / itemsPerPage);
    } else {
        totalPages = Math.ceil(paymentsData.length / itemsPerPage);
    }
    const startIndex = (currPageNo - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, paymentsData.length);
    const [currentPageData, setCurrentPageData] = useState(paymentsData);

    useEffect(() => {
        if (context.filteredData.length > 0 && context.filteredData !== "empty") {
            setEmptyData(false)
            setCurrentPageData(context.filteredData)
        } else if (context.filteredData === "empty" || context.paymentData.length === 0) {
            setEmptyData(true)
        }
        else {
            setEmptyData(false)
            setCurrentPageData(context.paymentData)
        }
    }, [context])

    useEffect(() => {
        if (currentPageData.slice(startIndex, endIndex).length === 0 && currPageNo > 1) {
            setCurrPageNo(currPageNo - 1);
        } else if (currentPageData.slice(startIndex, endIndex).length === 0 && currPageNo === 1) {
            setEmptyData(true);
        }
    }, [currentPageData, currPageNo, itemsPerPage, startIndex, endIndex,]);

    const handlePageChange = (value) => {
        setCurrPageNo(value);
    };

    const handleItemsPerPage = (event) => {
        setItemsPerPage(event.target.value);
        setCurrPageNo(1)
        handlePageChange(1)
    };

    const sortName = () => {
        const sortedData = sortByName(paymentsData, 'asc')
        setCurrentPageData(sortedData)
    }

    const sortDate = () => {
        const sortedData = sortByDate(paymentsData, 'asc')
        setCurrentPageData(sortedData)
    }

    return (
        <>
            <Box sx={{ width: context.openSidebar ? "WidthFull" : "calc(100%-WidthFull)", display: "flex", justifyContent: "space-between", flexDirection: "column", height: "100%" }}>
                <Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <CustomTypo fontWeight="bold" fontSize="22px" color="#000000">
                            Payment Details
                        </CustomTypo>
                        <img src={filter} alt='filter' width="14px" height="19.25px" />
                    </Box>
                    <Divider sx={{ color: "#E5E5E5", marginTop: "20px", marginBottom: "18px" }} />
                    <Table sx={{ minWidth: context.openSidebar ? "100%" : `calc(100% - 240px)` }}>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ border: "none", display: "flex", justifyContent: "space-between", "&:hover": { cursor: "pointer" } }} onMouseEnter={() => showSortButton("name")} onMouseLeave={() => hideSortButton("name")} onClick={() => sortName()}>
                                    <CustomTypo color="#ACACAC" fontSize="12px" >
                                        Name
                                    </CustomTypo>
                                    <img src={filter} alt="filter" width="12px" height="15.25px" style={{ marginRight: "30px", alignSelf: "center", display: "none" }} id="name" />
                                </TableCell>
                                <TableCell sx={{ border: "none" }}>
                                    <CustomTypo color="#ACACAC" fontSize="12px" >
                                        Payment Schedule
                                    </CustomTypo>
                                </TableCell>
                                <TableCell sx={{ border: "none" }} >
                                    <CustomTypo color="#ACACAC" fontSize="12px" >
                                        Bill Number
                                    </CustomTypo>
                                </TableCell>
                                <TableCell sx={{ border: "none" }} >
                                    <CustomTypo color="#ACACAC" fontSize="12px" >
                                        Amount Paid
                                    </CustomTypo>
                                </TableCell>
                                <TableCell sx={{ border: "none" }}>
                                    <CustomTypo color="#ACACAC" fontSize="12px" >
                                        Balance amount
                                    </CustomTypo>
                                </TableCell>
                                <TableCell sx={{ border: "none", display: "flex", justifyContent: "space-between", "&:hover": { cursor: "pointer" } }} onMouseEnter={() => showSortButton("date")} onMouseLeave={() => hideSortButton("date")} onClick={() => sortDate()}>
                                    <CustomTypo color="#ACACAC" fontSize="12px" >
                                        Date
                                    </CustomTypo>
                                    <img src={filter} alt="filter" width="12px" height="15.25px" style={{ marginRight: "30px", alignSelf: "center", display: "none" }} id="date" />
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                emptyData ?

                                    <TableRow>
                                        <TableCell colSpan={7} rowSpan={7}>
                                            <Box sx={{ backgroundColor: "#edabab", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                <CustomTypo fontSize="40px" color="red" fontWeight="300" >No Data to Show!</CustomTypo>
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                    :

                                    currentPageData.slice(startIndex, endIndex).map((row, index) => (
                                        <TableRow
                                            key={index}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#F8F8F8" }}
                                        >
                                            <TableCell sx={{ border: "none" }}>
                                                <CustomTypo color="#000000" fontSize="14px" fontWeight="500">
                                                    {row.name}
                                                </CustomTypo>
                                            </TableCell>
                                            <TableCell align="left" sx={{ border: "none" }}>
                                                <CustomTypo color="#000000" fontSize="14px" fontWeight="500">
                                                    {row.paymentSchedule}
                                                </CustomTypo>
                                            </TableCell>
                                            <TableCell align="left" sx={{ border: "none" }}>
                                                <CustomTypo color="#000000" fontSize="14px" fontWeight="500" >
                                                    {row.billNumber}
                                                </CustomTypo>
                                            </TableCell>
                                            <TableCell align="left" sx={{ border: "none" }}>
                                                <CustomTypo color="#000000" fontSize="14px" fontWeight="500" >
                                                    {row.amountPaid}
                                                </CustomTypo>
                                            </TableCell>
                                            <TableCell align="left" sx={{ border: "none" }}>
                                                <CustomTypo color="#000000" fontSize="14px" fontWeight="500">
                                                    {row.balanceAmount}
                                                </CustomTypo>
                                            </TableCell>
                                            <TableCell align="left" sx={{ border: "none" }}>
                                                <CustomTypo color="#000000" fontSize="14px" fontWeight="500">
                                                    {row.date}
                                                </CustomTypo>

                                            </TableCell>
                                            <TableCell align="right" sx={{ border: "none" }}>
                                                <img src={eye} alt='view' />
                                            </TableCell>
                                        </TableRow>
                                    ))

                            }
                        </TableBody>
                    </Table>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CustomTypo>Page No: {currPageNo}</CustomTypo>
                    <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
                        <CustomPagination
                            count={totalPages}
                            page={currPageNo}
                            handlePageChange={handlePageChange}
                        />
                    </Box>
                    <Box>
                        <Select
                            sx={{ width: "200px", height: "30px" }}
                            value={itemsPerPage}
                            onChange={handleItemsPerPage}
                        >
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={15}>15</MenuItem>
                        </Select>
                    </Box>
                </Box>
            </Box>
        </>
    )
}