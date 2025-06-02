export const getWeatherIcon = (description: string): string => {
  const desc = description.toLowerCase();
  if (desc.includes("thundery showers") || desc.includes("thunderstorm")) return "fa-bolt";
  if (desc.includes("showers") || desc.includes("rain")) return "fa-cloud-rain";
  if (desc.includes("partly cloudy") && desc.includes("day")) return "fa-cloud-sun";
  if (desc.includes("partly cloudy") && desc.includes("night")) return "fa-cloud-moon";
  if (desc.includes("cloudy")) return "fa-cloud";
  if (desc.includes("sunny") || desc.includes("fine") || desc.includes("fair") || desc.includes("clear")) return "fa-sun";
  if (desc.includes("windy")) return "fa-wind";
  if (desc.includes("hazy")) return "fa-smog";
  return "fa-cloud-sun"; // Default to cloud-sun instead of question mark
};

export const formatDayName = (dateString: string, index: number): string => {
  if (index === 0) return "Today";
  if (index === 1) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    if (new Date(dateString).toDateString() === tomorrow.toDateString()) {
      return "Tomorrow";
    }
  }

  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' });
};
