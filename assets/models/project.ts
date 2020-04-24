import { ProjectSource } from '~/assets/models/project-sources'
export class Project {
  readonly name: String
  readonly description: String
  readonly year: Number | null
  readonly source: ProjectSource | null
  constructor(
    description: String,
    name: String | null = null,
    year: Number | null = null,
    source: ProjectSource | null = null
  ) {
    this.description = description
    this.name = name || `My${year != null ? ' ' + year.toString() : ''} Project`
    this.year = year
    this.source = source
  }
}
export default Project
