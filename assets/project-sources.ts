type ImageSrc = String
export class ProjectSource {
  icon: ImageSrc
  name: String
  alt: String
  constructor(icon: ImageSrc, name: String, alt: String = name) {
    this.icon = icon
    this.name = name
    this.alt = alt
  }
}

export const Pacific = new ProjectSource(
  require('~/assets/boxer.svg'),
  'Pacific University'
)
export const PortlandState = new ProjectSource(
  require('~/assets/psu-monogram.svg'),
  'Portland State University',
  "The Portland State University logo includes intertwined letters P, S and U that represent the interconnectedness of the university to the city, region and world, and the words 'Portland State University'."
)

export const ProjectSources = {
  Pacific,
  PortlandState
}

export default ProjectSources
