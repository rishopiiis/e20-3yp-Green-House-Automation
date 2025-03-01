import * as scale from "d3-scale";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import RNFS from "react-native-fs";
import { BarChart, Grid } from "react-native-svg-charts";
import xml2js from "xml2js";

const stat = () => {
  const [summary, setSummary] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const readXML = async () => {
      try {
        const xmlPath = `${RNFS.DocumentDirectoryPath}/data.xml`;
        const xmlContent = await RNFS.readFile(xmlPath);
        const result = await xml2js.parseStringPromise(xmlContent);

        // Example for processing XML, modify this based on your XML structure
        const entries = result.dataset.entry.map((entry) => ({
          key: entry.$.key,
          value: parseInt(entry.value[0], 10),
        }));

        setData(entries.map((entry) => entry.value));
        setSummary(`Total Entries: ${entries.length}`);
      } catch (err) {
        console.error("Error reading XML:", err);
      }
    };

    readXML();
  }, []);

  return (
    <ScrollView>
      <View>
        <Text>Summary: {summary}</Text>
        <BarChart
          style={{ height: 200 }}
          data={data}
          svg={{ fill: "rgba(134, 65, 244, 0.8)" }}
          contentInset={{ top: 30, bottom: 30 }}
          yAccessor={({ item }) => item}
          scale={scale.scaleBand}
        >
          <Grid />
        </BarChart>
      </View>
    </ScrollView>
  );
};

export default stat;
