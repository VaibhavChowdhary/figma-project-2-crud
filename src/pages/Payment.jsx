import { Box, Divider, Pagination } from '@mui/material';
import CustomTypo from '../CustomComponents/CustomTypo';
import filter from "../assets/filter.png";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import React, { useContext } from 'react';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import eye from "../assets/eye.png"
import { SomeContext } from '../context/context'
export default function Payment() {
    const xyz = useContext(SomeContext);
    const rows = [
        { name: "vaibhav", paymentSchedule: "first", billNumber: "00012223", amountPaid: "INR 35,000", balanceAmount: "INR 55,000", date: "08 Dec, 2021" },
        { name: "vaibhav", paymentSchedule: "first", billNumber: "00012223", amountPaid: "INR 35,000", balanceAmount: "INR 55,000", date: "08 Dec, 2021" },
        { name: "vaibhav", paymentSchedule: "first", billNumber: "00012223", amountPaid: "INR 35,000", balanceAmount: "INR 55,000", date: "08 Dec, 2021" },
    ]
    return (
        <>
            <Box sx={{ width: xyz.openSidebar ? "WidthFull" : "calc(100%-WidthFull)", display: "flex", justifyContent: "space-between", flexDirection: "column", height: "100%" }}>
                <Box>

                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <CustomTypo fontWeight="bold" fontSize="22px" color="#000000">
                            Payment Details
                        </CustomTypo>
                        <img src={filter} alt='filter' width="14px" height="19.25px" />
                    </Box>
                    <Divider sx={{ color: "#E5E5E5", marginTop: "20px", marginBottom: "18px" }} />
                    <Table sx={{ minWidth: xyz.openSidebar ? "100%" : `calc(100% - 240px)` }}>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ border: "none" }}>
                                    <CustomTypo color="#ACACAC" fontSize="12px" >
                                        Name
                                    </CustomTypo>
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
                                <TableCell sx={{ border: "none" }} >
                                    <CustomTypo color="#ACACAC" fontSize="12px" >
                                        Date
                                    </CustomTypo>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, index) => (
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
                            ))}
                        </TableBody>
                    </Table>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Pagination count={10} color="warning" showFirstButton showLastButton />
                </Box>
            </Box>
        </>
    )
}