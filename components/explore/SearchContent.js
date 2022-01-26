import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const SearchContent = props => {
  const searchData = [
    {
      id: 0,
      images: [
        require("../../assets/explore/posts1.jpg"),
        require("../../assets/explore/posts2.jpg"),
        require("../../assets/explore/posts3.jpg"),
        require("../../assets/explore/posts4.jpg"),
        require("../../assets/explore/posts5.jpg"),
        require("../../assets/explore/posts6.jpg"),
        require("../../assets/explore/posts7.jpg"),
        require("../../assets/explore/posts8.jpg"),
      ],
    },
    {
      id: 1,
      images: [
        require("../../assets/explore/posts9.jpg"),
        require("../../assets/explore/posts10.jpg"),
        require("../../assets/explore/posts11.jpg"),
        require("../../assets/explore/posts12.jpg"),
        require("../../assets/explore/posts13.jpg"),
        require("../../assets/explore/posts14.jpg"),
        require("../../assets/explore/posts15.jpg"),
        require("../../assets/explore/posts16.jpg"),
      ],
    },
    {
      id: 2,
      images: [
        require("../../assets/explore/posts17.jpg"),
        require("../../assets/explore/posts18.jpg"),
        require("../../assets/explore/posts19.jpg"),
        require("../../assets/explore/posts20.jpg"),
        require("../../assets/explore/posts21.jpg"),
        require("../../assets/explore/posts22.jpg"),
        require("../../assets/explore/posts23.jpg"),
      ],
    },
  ];

  return (
    <View>
      {searchData.map((data, index) => {
        return (
          <View key={index}>
            {data.id === 0 ? (
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                }}>
                {data.images.map((imageData, imgIndex) => {
                  return (
                    <TouchableOpacity
                      key={imgIndex}
                      onPressIn={() => props.data(imageData)}
                      onPressOut={() => props.data(null)}
                      style={{paddingBottom: 2}}>
                      <Image
                        source={imageData}
                        style={{width: 129, height: 150}}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
            {data.id === 1 ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    width: 261,
                    justifyContent: 'space-between',
                  }}>
                  {data.images.slice(0, 4).map((imageData, imgIndex) => {
                    return (
                      <TouchableOpacity
                        key={imgIndex}
                        onPressIn={() => props.data(imageData)}
                        onPressOut={() => props.data(null)}
                        style={{paddingBottom: 2}}>
                        <Image
                          source={imageData}
                          style={{width: 129, height: 150}}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
                <TouchableOpacity
                  onPressIn={() => props.data(data.images[5])}
                  onPressOut={() => props.data(null)}
                  style={{marginLeft: 2}}>
                  <Image
                    source={data.images[5]}
                    style={{width: 129, height: 300}}
                  />
                </TouchableOpacity>
              </View>
            ) : null}
            {data.id === 2 ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  onPressIn={() => props.data(data.images[2])}
                  onPressOut={() => props.data(null)}
                  style={{paddingRight: 2}}>
                  <Image
                    source={data.images[2]}
                    style={{width: 260, height: 300}}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    width: 130,
                    justifyContent: 'space-between',
                  }}>
                  {data.images.slice(0, 2).map((imageData, imgIndex) => {
                    return (
                      <TouchableOpacity
                        key={imgIndex}
                        onPressIn={() => props.data(imageData)}
                        onPressOut={() => props.data(null)}
                        style={{paddingBottom: 2}}>
                        <Image
                          source={imageData}
                          style={{width: 129, height: 150}}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            ) : null}
          </View>
        );
      })}
    </View>
  );
};

export default SearchContent;
