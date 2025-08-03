import React from "react";

interface StarRatingProps {
  rating?: number; // e.g. 4.9
  count?: number; // e.g. 182
}

const StarRating: React.FC<StarRatingProps> = ({
  rating = 4.9,
  count = 120,
}) => (
  <div
    itemProp="aggregateRating"
    itemScope
    itemType="https://schema.org/AggregateRating"
    className="flex items-center space-x-1 text-amber-400 text-lg"
  >
    {[1, 2, 3, 4, 5].map(star => (
      <span key={star} aria-hidden="true">
        {rating >= star ? "★" : rating > star - 1 ? "☆" : "☆"}
      </span>
    ))}
    <span
      className="ml-2 text-white text-base font-medium"
      itemProp="ratingValue"
    >
      {rating.toFixed(1)}
    </span>
    <span className="ml-1 text-slate-400 text-sm" itemProp="reviewCount">
      ({count}+ reviews)
    </span>
    <meta itemProp="bestRating" content="5" />
    <meta itemProp="worstRating" content="1" />
  </div>
);

export default StarRating;
