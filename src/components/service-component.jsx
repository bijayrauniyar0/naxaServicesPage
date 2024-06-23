import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchServicesRequest } from "../store/serviceActions";
import LeftImage from "../subcomponents/LeftImage";
import RightImage from "../subcomponents/RightImage";

const ServiceListComponent = () => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services.services);
  const loading = useSelector((state) => state.services.loading);
  const error = useSelector((state) => state.services.error);

  useEffect(() => {
    dispatch(fetchServicesRequest());
  }, [dispatch]);

  // Check if services is null or undefined
  if (!services) {
    return null; // or render a loading state or handle as appropriate
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
      {sortedServices.map((service) =>
        service.service_order % 2 === 0 ? (
          <LeftImage
            key={service.id}
            title={service.title}
            subDetail={service.description1}
            details={service.description2}
            smallIcon={service.photo}
            rightImage={service.icon}
          />
        ) : (
          <RightImage
            key={service.id}
            title={service.title}
            subDetail={service.description1}
            details={service.description2}
            smallIcon={service.photo}
            rightImage={service.icon}
          />
        )
      )}
    </div>
  );
};

export default ServiceListComponent;
