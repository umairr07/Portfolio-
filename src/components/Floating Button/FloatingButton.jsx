import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const FloatingButton = ({ onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-gradient-to-r from-[#47b8e9] to-[#85b3ca]
                 text-white p-4 rounded-full shadow-lg cursor-pointer
                 hover:shadow-2xl transition-all duration-300"
    >
      <ArrowUp size={24} />
    </motion.div>
  );
};

export default FloatingButton;
