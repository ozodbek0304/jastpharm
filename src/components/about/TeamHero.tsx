"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import useResponsive from "@/hooks/use-responsive";
import api from "@/utils/api";
import parse from 'html-react-parser'
import Preloader from "@/utils/Preloader";

const TeamHero = () => {

  const { isMobile } = useResponsive()
  const [data, setData] = useState<any>(null)

  const getData = async () => {
    const resp = await api.get(`common/about-team/`)

    setData(resp.data?.[0]);
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      {
        data ? (
          <div className="category-lineup-area fadeInUp animated mb-35">
            <div className="container">
              <div className="row">
                <p className="team-description" >
                  {parse(data?.description)}
                </p>

                <Image src={data.image} width={1200} height={isMobile ? 250 : 480} style={{ objectFit: 'cover', objectPosition: 'center' }} alt="product" />
              </div>
            </div>
          </div>
        ) : <Preloader />
      }
    </>
  );
};

export default TeamHero;
