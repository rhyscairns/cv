import config from '@/config/index.js'

async function getEducation () {
  try {
    const response = await fetch(`${config.api.aws}/education`)

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()

    // Handle your data here
    return data
  } catch (error) {
    // Handle any errors here
    console.error('There has been a problem with your fetch operation:', error)
  }
}

async function getExperience () {
  try {
    const response = await fetch(`${config.api.aws}/experience`, {
      next: { revalidate: 3600 } // <-- Cache for 1 hour (3600 seconds)
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()

    // Handle your data here
    return data
  } catch (error) {
    // Handle any errors here
    console.error('There has been a problem with your fetch operation:', error)
  }
}

async function getProjects () {
  try {
    const response = await fetch(`${config.api.aws}/projects`, {
      next: { revalidate: 3600 } // <-- Cache for 1 hour (3600 seconds)
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()

    // Handle your data here
    return data
  } catch (error) {
    // Handle any errors here
    console.error('There has been a problem with your fetch operation:', error)
  }
}

async function getAboutMe () {
  try {
    const response = await fetch(`${config.api.aws}/about-me`, {
      next: { revalidate: 3600 } // <-- Cache for 1 hour (3600 seconds)
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()

    // Handle your data here
    return data
  } catch (error) {
    // Handle any errors here
    console.error('There has been a problem with your fetch operation:', error)
  }
}

export { getEducation, getExperience, getProjects, getAboutMe }
