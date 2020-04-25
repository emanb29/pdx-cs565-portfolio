import { ProjectSource } from '~/assets/models/project-sources'
export class Project {
  readonly name: string
  readonly description: string
  readonly year: number | null
  readonly source: ProjectSource | null
  constructor(
    description: string,
    name: string | null = null,
    year: number | null = null,
    source: ProjectSource | null = null
  ) {
    this.description = description
    this.name = name || `My${year != null ? ' ' + year.toString() : ''} Project`
    this.year = year
    this.source = source
  }
}
export default Project
