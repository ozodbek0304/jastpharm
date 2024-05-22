"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Breadcrumb from "@/sheardComponent/Breadcrumb";
import useResponsive from "@/hooks/use-responsive";
import api from "@/utils/api";
import parse from 'html-react-parser'

const MissionMain = () => {

  const { isMobile } = useResponsive()
  const [data, setData] = useState<any>(null)

  const getData = async () => {
    const resp = await api.get(`common/mission/`)

    setData(resp.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className="category-lineup-area">
        <div className="container">
          <div className="row">
            <Breadcrumb pageTitle='ourMission' />

            <img src={data?.image} style={{ objectFit: 'contain', width: '100%', height: 'auto' }} alt="product" />

            <div className="category-wrapper category-wrapper1 mt-15">
              {
                parse(data?.description || '')
              }
            </div>

          </div>
        </div>
      </div>
      .
    </>
  );
};

export default MissionMain;
