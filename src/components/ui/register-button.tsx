import { motion } from "framer-motion";

interface RegisterButtonProps {
  status: 'Open' | 'Coming Soon' | 'Closed';
  onClick: () => void;
}

export const RegisterButton = ({ status, onClick }: RegisterButtonProps) => {
  const getButtonStyles = () => {
    switch (status) {
      case 'Open':
        return 'bg-purple-600 hover:bg-purple-700 cursor-pointer';
      case 'Coming Soon':
        return 'bg-yellow-500 hover:bg-yellow-600';
      case 'Closed':
        return 'bg-gray-500 cursor-not-allowed';
    }
  };

  return (
    <motion.button
      onClick={status === 'Open' ? onClick : undefined}
      className={`px-4 py-2 text-white rounded-lg font-medium ${getButtonStyles()}`}
      whileHover={status !== 'Closed' ? { scale: 1.05 } : {}}
      whileTap={status === 'Open' ? { scale: 0.95 } : {}}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
    >
      {status === 'Open' ? 'Register Now' : status}
    </motion.button>
  );
};