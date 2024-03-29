import React from "react";

import { useSelector } from "react-redux";

import "./collection.styles.scss";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selectors";

const CollectionPage = ({ match }) => {
  const collection = useSelector(selectCollection(match.params.collectionId));
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
