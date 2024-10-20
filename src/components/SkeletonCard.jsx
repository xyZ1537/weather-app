import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import "./SkeletonCard.css";

const SkeletonCard = ({ isSimplified = false, number = 1 }) => {

  return (
    Array(number).fill(0).map((_, index) =>  
      <div className={isSimplified ? "card-container forecast-card" : "card-container"} key={index} data-testid="weather-card-skeleton">
        <Skeleton className="skeleton-date" />
        <Skeleton className="skeleton-weather" />
        <Skeleton className="skeleton-info" count={isSimplified? 1 : 3} />
      </div>
  ))
}

export default SkeletonCard
