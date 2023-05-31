import { mouseEnterTooltip, mouseOutTooltip, clickTooltip } from "./content-scripts/tooltips.js";

const tooltips = document.querySelectorAll('.tooltip');

tooltips.forEach(tooltip => {
  tooltip.addEventListener('mouseenter', mouseEnterTooltip);
  tooltip.addEventListener('click', clickTooltip);
  tooltip.addEventListener('mouseout', mouseOutTooltip);
});
