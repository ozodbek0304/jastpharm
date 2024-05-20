import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import useResponsive from "@/hooks/use-responsive";
import { brandData } from "./PartnersMain";
import api from "@/utils/api";
import parse from 'html-react-parser'

const CategoryLineUp = () => {

  const { isMobile } = useResponsive()
  const [timer, setTimer] = useState(0)
  const [data, setData] = useState<any>(null)

  const showItems = () => {
    const interval = setInterval(() => {
      setTimer(c => c + 1)
    }, 300)
    setTimeout(() => {
      clearInterval(interval)
    }, 2000);
  }

  const getData = async () => {
    const resp = await api.get(`common/our-history/`)
    showItems()
    setData(resp.data);
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className="category-lineup-area">
        <div className="container">
          <div className="row pt-20 gy-5">
            <div className={`col-md-5 fade ${timer > 0 ? "show" : ""}`}>
              <Image src={data?.image} width={1200} height={isMobile ? 200 : 300} alt="product" style={{ objectFit: 'cover' }} />
            </div>
            <div className={`col-md-7 fade ${timer > 1 ? "show" : ""}`}>
              <div className="category-wrapper category-wrapper1">
                {data?.body && parse(data?.body)}
              </div>
            </div>
            <div className={`col-md-7 fade ${timer > 2 ? "show" : ""}`}>
              <div className="category-wrapper category-wrapper1">
                Наша история началась в 2011 году, когда возникали большие трудности в ведении бизнеса с иностранными партнерами. Несмотря на все преграды, компания уверенными шагами внедряла новые технологии и обучала врачей Узбекистана. Оглядываясь назад, и, смотря на сегодняшние достижения врачей, мы с гордостью говорим, что мы не зря старались и верили в их результат.
                Сегодня врачи в области кардиохирургии делают операции по установки стентов, и людям не приходиться выезжать в соседние страны для получения медицинского обслуживания. В Узбекистане растет и развивается сеть лабораторий VITROS, где функционирует наше оборудование от Johnson & Johnson, и мы рады, что население Узбекистана могут пройти диагностику на мировом оборудовании и получить точный и достоверный результат.
                Еще одним нашим достижением является внедрение и бесперебойные поставки шовного хирургического материала ETHICON, мы гордимся, что наши хирурги, как хирурги других стран, пользуются и работают самыми популярными и качественными нитями. К 2022 году мы выросли по количеству компаний, входящих в состав группы компании MEDOL. На сегодняшний день успешно функционирует 4 организации, имеющих свою миссию, цель и сферу деятельности.
              </div>
            </div>
            <div className={`col-md-5 fade ${timer > 3 ? "show" : ""}`}>
              <Image src={"https://medol.uz//data/uploads/module/pages/144/original/63baf330b6056.jpg"} width={1200} height={isMobile ? 200 : 300} alt="product" style={{ objectFit: 'cover' }} />
            </div>
            <div className={`col-md-12 fade ${timer > 4 ? "show" : ""}`}>
              <div className="category-wrapper category-wrapper1 mt-15">
                <div className="category-wrapper category-wrapper1 mt-15 row gy-4 p-0 mx-auto">
                  {data?.images.map((item: { image: string }, i: number) => (
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                      <div className="text-center brand-img-div" style={{ border: '1px solid #c3cccc' }}>
                        <Image
                          className="d-inline-block brand-img"
                          src={item.image}
                          alt="brand-img"
                          width={200}
                          height={300}
                          style={{ width: 'auto', height: 'auto' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      .
    </>
  );
};

export default CategoryLineUp;
