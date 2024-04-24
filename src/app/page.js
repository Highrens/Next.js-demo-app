"use client";
import Header from "@/components/Header/header";
import "./page.css";
import { YMInitializer } from "react-yandex-metrika";
import { useState } from "react";
import Random_Container from "@/components/Random_Container/Random_Container";

export default function Home() {

  return (
    <main className="main">
      <YMInitializer accounts={[15825571]} />
      <Header />
      <Random_Container />
    </main>
  );
}
