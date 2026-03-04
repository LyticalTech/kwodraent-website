import React from 'react';

const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => {
	return <div className={`px-2 sm:px-4 lg:px-8 ${className}`}>{children}</div>;
};

export default Container;
