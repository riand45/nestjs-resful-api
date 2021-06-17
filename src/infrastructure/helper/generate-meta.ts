export function generateMeta(limit?: number, total?: number, skip?: number) {
  return {
    limit: Number(limit),
    total: Number(total),
    skip: Number(skip)
  };
}
