// index.js

import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import DatePicker from 'react-datepicker';
import { IoSearch } from "react-icons/io5";
import { Spinner } from '@chakra-ui/react';
import { Skeleton, Stack, SkeletonCircle, SkeletonText } from '@chakra-ui/react';
import 'react-datepicker/dist/react-datepicker.css';
import ParkingCard from '../../Components/ParkingComponents/ParkingCard';
import Footer from '../../Components/LayoutComponents/Footer';
export { useParams, React, useState ,useEffect,  DatePicker, IoSearch, Spinner, Skeleton, Stack, SkeletonCircle, SkeletonText, ParkingCard, Footer };
