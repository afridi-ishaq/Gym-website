import { motion } from 'framer-motion';

export const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  hover = true,
  delay = 0,
  ...props 
}) => {
  const variantStyles = {
    default: 'bg-dark-800 border border-dark-700 hover:border-neon-cyan',
    glass: 'bg-white bg-opacity-5 backdrop-blur-md border border-white border-opacity-10',
    gradient: 'bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={hover ? { scale: 1.02, y: -5 } : {}}
      className={`
        rounded-xl p-6 transition-all duration-300
        ${variantStyles[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
