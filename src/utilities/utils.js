export const formatCurrency = (n) => {
	n = String(n/100);
	return '$'+n.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export const formatVolume = (n) => {
	n = String(n/1000);
	return n.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")+' L';
}