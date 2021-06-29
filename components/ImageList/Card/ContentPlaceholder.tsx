import * as React from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import { motion, inverted } from "framer-motion";
import { useInvertedScale } from "framer-motion/types/value/use-inverted-scale";
// import { useInvertedScale } from "framer-motion/types/value/use-inverted-scale";

export const ContentPlaceholder = React.memo(() => {
  const inverted = useInvertedScale();
  return (
    <motion.div
      className="content-container"
      style={{ originY: 0, originX: 0 }}
      layout="position"
    >
      <LoremIpsum p={6} avgWordsPerSentence={6} avgSentencesPerParagraph={4} />
    </motion.div>
  );
});
