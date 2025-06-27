// src/utils/animation.ts
type AnimationClassList = string[]
const animationClassMap: Record<string, AnimationClassList> = {
  image_down_content_down: ['fade-diagonal-in-top2bottom', 'fade-diagonal-in-top2bottom'],
  image_down_content_up: ['fade-diagonal-in-top2bottom', 'fade-diagonal-in-bottom2top'],
  image_up_content_down: ['fade-diagonal-in-bottom2top', 'fade-diagonal-in-top2bottom'],
  image_up_content_up: ['fade-diagonal-in-bottom2top', 'fade-diagonal-in-bottom2top'],
}

export function getAnimationClass(type?: string): AnimationClassList {
  return animationClassMap[type ?? ''] || animationClassMap['image_down_content_donw']
}
