import { GameObjectProps, Coordinates, Size } from '@/types'
import { EventBus } from '../EventBus'

export class GameObject extends EventBus {
  protected _isCollisional = true
  private readonly size: Size
  sprite?: string
  position: Coordinates

  static distance(point_1: Coordinates, point_2: Coordinates): number {
    return Math.sqrt(
      (point_1.x - point_2.x) ** 2 + (point_1.y - point_2.y) ** 2
    )
  }

  constructor(props: GameObjectProps) {
    super()

    this.position = { ...props.startPosition }
    this.size = { ...props.size }
  }

  get bottom(): number {
    return this.position.y + this.size.height
  }

  get isCollisional(): boolean {
    return this._isCollisional
  }

  get height(): number {
    return this.size.height
  }

  get left(): number {
    return this.position.x
  }

  get right(): number {
    return this.position.x + this.width
  }

  get spriteAngle(): number | undefined {
    return
  }

  get top(): number {
    return this.position.y
  }

  get width(): number {
    return this.size.width
  }

  update(...args: any[]): void {
    return
  }
}
