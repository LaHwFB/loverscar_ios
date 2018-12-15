import React from "react";
import { FlatList, StyleSheet } from "react-native";
import CarItem from "../CarItem/CarItem";

const CarList = props => {
  return(
    <FlatList
      style={styles.listContainer}
      data={props.cars}
      renderItem={ (info) => (
        <CarItem
          carName = {info.item.name}
          carImage = {info.item.image}
          sieges = {info.item.sieges}
          portes = {info.item.portes}
          onItemPressed={ () => props.onItemPressed(info.item.key)}
        />
      )}
    />
  );
};


const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
  }
});

export default CarList;
