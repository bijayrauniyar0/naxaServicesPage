import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchServicesRequest } from "../store/serviceActions";
import LeftImage from "../subcomponents/LeftImage";
import RightImage from "../subcomponents/RightImage";
import "./Service-component.css";
import useScreenWidth from "../subcomponents/useScreenWidth";

const ServiceListComponent = () => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services.services);
  const loading = useSelector((state) => state.services.loading);
  const error = useSelector((state) => state.services.error);
  const isMobile = useScreenWidth();
  console.log(isMobile)

  useEffect(() => {
    dispatch(fetchServicesRequest());
  }, [dispatch]);

  // Check if services is null or undefined
  if (!services) {
    return null; 
  }

  // Sorting services based on service_order
  const sortedServices = services.slice().sort((a, b) => a.service_order - b.service_order);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="service-list">
      <div className="service-wrap">
        {sortedServices.map((service) =>
          isMobile ? (
            <LeftImage
              key={service.id}
              title={service.title}
              subDetail={service.description1}
              details={service.description2}
              smallIcon={service.photo}
              rightImage={service.icon}
            />
          ) : (
          service.service_order % 2 === 0 ? (
            <RightImage
              key={service.id}
              title={service.title}
              subDetail={service.description1}
              details={service.description2}
              smallIcon={service.photo}
              rightImage={service.icon}
            />
            
          ) : (
            <LeftImage
              key={service.id}
              title={service.title}
              subDetail={service.description1}
              details={service.description2}
              smallIcon={service.photo}
              rightImage={service.icon}
            />
            
          )
        )
        )}
      </div>
    </div>
  );
};

export default ServiceListComponent;
