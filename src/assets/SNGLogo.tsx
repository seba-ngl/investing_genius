const SNGLogo = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="90" height="90" fill="url(#pattern0)" />
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_1_2" transform="scale(0.0111111)" />
        </pattern>
        <image
          id="image0_1_2"
          width="90"
          height="90"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDcxODYwMENGMThDMTFFOTgxN0Q5MDgzMUEwQUI4RDkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDcxODYwMERGMThDMTFFOTgxN0Q5MDgzMUEwQUI4RDkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NzE4NjAwQUYxOEMxMUU5ODE3RDkwODMxQTBBQjhEOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NzE4NjAwQkYxOEMxMUU5ODE3RDkwODMxQTBBQjhEOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhqRN6cAAAyQSURBVHja7F0JeBVX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"
        />
      </defs>
    </svg>
  );
};

export default SNGLogo;
