"use client"
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import LandingPage from "./LandingPage";
import "./globals.css";
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes >
      <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>

    </>
  );
}
